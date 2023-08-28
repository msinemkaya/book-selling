export default function Container({ children, className, ...rest }){

  return(
    <div className={className} {...rest}>
      {children}
    </div>
  );
}