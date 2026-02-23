import { Controller, type Control, type FieldError } from "react-hook-form";

interface Props {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: FieldError;
  control: Control<any>;
}

export const InputForm = ({
  label,
  name,
  type,
  placeholder,
  error,
  control,
  ...props
}: Props) => {
  return (
    <>
      <div>
        <label className="block text-lg font-bold text-text/90" htmlFor={name}>
          {label}
        </label>
        <div className="flex flex-col">
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                className={`bg-primary-invert/50 focus:border-blue-600 focus:border w-full px-3 mt-1 py-2 leading-tight placeholder:text-text text-text border rounded shadow appearance-none focus:shadow-outline ${
                  error
                    ? "outline-red-500 outline-1 border-transparent focus:outline-blue-500 focus:outline-1.5"
                    : "focus:border-blue-600"
                }`}
                {...props}
              />
            )}
          />

          <div className="h-5">
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </div>
        </div>
      </div>
    </>
  );
};
