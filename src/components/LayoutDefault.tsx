import { BaseHeader } from "./BaseHeader";
import { BaseFooter } from "./BaseFooter";

export const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <BaseHeader />
      <main>{children}</main>
      <BaseFooter />
    </div>
  );
};
