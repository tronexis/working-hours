import Layout from "../components/Layout";
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  return (
    <Layout name="Login" notopbar>
      <div className="max-w-[450px] flex mx-auto items-center justify-center p-8 rounded-xl">
        <button className="py-3 text-xl transition rounded-full bg-zinc-700/60 hover:bg-blue-600 px-7" onClick={() => router.push('/overview')}>Login</button>
      </div>
    </Layout>
  );
}
