import ComposeBox from "../compose-box";
import TextInput from "../text-input";

const FeedHome = () => {
  return (
    <div className="w-full flex flex-col flex-nowrap justify-center">
      <TextInput />
      <ComposeBox />
    </div>
  );
};

export default FeedHome;
