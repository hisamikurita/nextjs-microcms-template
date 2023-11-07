import Link from "next/link";
import { URL_HOME, URL_ABOUT } from "@/libs/constants";

export const BaseHeader = () => {
  return (
    <header>
      <div>
        <div>
          <p>
            <Link href={URL_HOME}>LOGO</Link>
          </p>
          <nav>
            <ul>
              <li>
                <Link href={URL_HOME}>Index</Link>
              </li>
              <li>
                <Link href={URL_ABOUT}>About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
