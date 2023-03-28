import z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import categories from './categories';
import {useForm} from 'react-hook-form';

export interface ExpenseFormData {
    description: string;
    amount: number;
    category: string;
}

interface Props {
    onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
    description: z.string().min(3, {
        message: 'Description must be at least 3 characters',
    }),
    amount: z
        .number({
            invalid_type_error: 'Amount must be a number',
        })
        .min(1, {
            message: 'Amount must be at least 1',
        }),
    category: z.enum(categories, {
        errorMap: () => ({message: 'Category must be one of the options'}),
    }),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({onSubmit}: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    return (
        <form
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
                reset();
            })}
        >
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input
                    {...register('description')}
                    type="text"
                    className="form-control"
                    id="description"
                />
                {errors.description && (
                    <p className="text-danger">{errors.description.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input
                    {...register('amount', {
                        valueAsNumber: true,
                    })}
                    type="number"
                    className="form-control"
                    id="amount"
                />
                {errors.amount && (
                    <p className="text-danger">{errors.amount.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                <select {...register('category')} className="form-select" id="category">
                    {categories.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
                {errors.category && (
                    <p className="text-danger">{errors.category.message}</p>
                )}
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default ExpenseForm;
