
//Defines what information the component will receive as props
//props are used to pass data from a parent component to a child component
//Home() in ourpage.tsx is our parent component and NavButton() is our child component
type NavButtonProps = {
  text: string;
  onClick?: () => void
};

//This is the NavButton component, which is a functional component that takes in props of type NavButtonProps
export default function NavButton({ text, onClick }: NavButtonProps) {
  return (
    <button className="NavButton whitespace-pre-line bg-[#997E67] text-white font-bold rounded-[15px] hover:bg-[#854638] active:bg-[#693626]" onClick={onClick}>
      {text}
    </button>
  );

}