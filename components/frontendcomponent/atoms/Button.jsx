import Link from "next/link";

export default function Button({
  classname = "",
  linkHref = "",
  buttonText = "",
  svgpath = "",
  onClick,
  ...rest
}) {
  const isLink = Boolean(linkHref);
  const Component = isLink ? Link : "button";
  const componentProps = {
    className: `btn ${classname}`,
    onClick: !isLink ? onClick : undefined,
    ...(isLink ? { href: linkHref } : { type: "button" }),
    ...rest,
  };
  return (
    <Component {...componentProps}>
      {buttonText}
      {svgpath}
    </Component>
  );
}
