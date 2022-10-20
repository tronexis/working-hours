import Layout from "../components/Layout";

export default function Settings() {
  return (
    <Layout name="Settings">
      <div className="max-w-[450px] space-y-4 xs:space-y-5 mx-auto bg-[#2d2f38]/30 p-8 rounded-xl">
        <h1 className="text-xl xs:text-2xl">Configure Target Origin</h1>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Target Origin</label>
          <input className="w-full bg-[#2d2f38] py-2 px-4 rounded-lg placeholder:opacity-40" placeholder="Enter a value" />
        </div>
      </div>
    </Layout>
  );
}
