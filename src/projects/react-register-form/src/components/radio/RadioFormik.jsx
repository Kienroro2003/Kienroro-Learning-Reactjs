import { useField } from "formik";
import { useController } from "react-hook-form";

const RadioFormik = ({ label, ...props }) => {
  const [field] = useField(props.name);

  return (
    <>
      <div className="flex items-center gap-x-3">
        <label className="custom-radio cursor-pointer">
          <input type="radio" {...field} {...props} hidden />
          <div className="h-full w-full bg-white rounded-full"></div>
        </label>
        <span>{label}</span>
      </div>
    </>
  );
};

export default RadioFormik;
