interface props {
  val: string;
  click: (val: string) => void;
}

const Button = ({ val, click }: props) => {
  return (
    <div onClick={() => click(val)} className="btn">
      {val}
    </div>
  );
};

export default Button;
