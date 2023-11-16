import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });

  return (
    <label className="custom-radio cursor-pointer">
      <input type="radio" {...field} {...props} hidden />
      <div className="h-full w-full bg-white rounded-full"></div>
    </label>
  );
};

export default RadioHook;
