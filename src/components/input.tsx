import clsx from "clsx";

const Input = ({
  parentClassName,
  inputClassName,
  label,
  type = "text"
}: {
  parentClassName?: string;
  label: string;
  inputClassName: string;
  type?: string
}) => {
  return (
    <div className={clsx("w-full mb-5", parentClassName)}>
      <label
        className="w-full block mb-1 mr-2
       text-lg text-z"
      >
        {label}
      </label>
      <input
        type={type}
        className={clsx(
          "w-full bg-transparent placeholder:text-[#4b5581] text-slate-700 text-sm border border-[#062650] rounded-full px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow",
          { inputClassName }
        )}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
