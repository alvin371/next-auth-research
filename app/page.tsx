import { redirect } from "next/navigation";

const IndexPage = () => {
  return redirect("/auth/login");
};
export default IndexPage;
