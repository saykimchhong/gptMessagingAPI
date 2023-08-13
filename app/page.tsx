import { SunIcon , BoltIcon ,ExclamationTriangleIcon} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-white h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">Chat GPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain Somthing to me</p>
            <p className="infoText">Explain Somthing to me</p>
            <p className="infoText">Explain Somthing to me</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain Somthing to me</p>
            <p className="infoText">Explain Somthing to me</p>
            <p className="infoText">Explain Somthing to me</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitation</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain Somthing to me</p>
            <p className="infoText">Explain Somthing to me</p>
            <p className="infoText">Explain Somthing to me</p>
          </div>
        </div>
      </div>
    </div>
  );
}
