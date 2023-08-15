import { DocumentData } from "firebase-admin/firestore";

type Props = {
  message: DocumentData;
};
function Message({ message }: Props) {
  const isChatGpt = message.user.name === "ChatGPT";
  return (
    <div className={`py-5 text-white ${isChatGpt && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-5xl mx-auto">
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img src={message.user.avatar} alt="" className="w-8 h-8" />
        <p className="pt-1 text-md">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
