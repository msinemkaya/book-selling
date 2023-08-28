export default function H2({ children, ...rest }){
  return(
    <h1 {...rest}>
      {children}
    </h1>
  );
}