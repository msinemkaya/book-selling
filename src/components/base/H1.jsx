export default function H1({ children, className, ...rest }){
  return(
    <h1 className={className} {...rest}>
      {children}
    </h1>
  );
}