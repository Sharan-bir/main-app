import { Redirect } from "expo-router";

const index = () => {
  return <Redirect href="/(auth)/sign-up" />;
};

export default index;
