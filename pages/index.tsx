import Image from "next/image";
import { NextPageWithLayout } from "./_app";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { getBaseLayout } from "../components/Layout/BaseLayout/BaseLayout";

const Home: NextPageWithLayout = () => (
  <PageWrapper>
    <Image
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
  </PageWrapper>
);

function toWeirdCase (string: any) {
    const words = string.split(" ");

    console.log('words', words);

    const adjWord = words.map((word: string) => {
        let newStr = ''
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                newStr += word[i].toUpperCase();
            } else {
                newStr += word[i].toLowerCase();
            }
        }

        return newStr;
    })

    return adjWord.join(' ')
} // Пример решения toWeirdCase

const multiplicationTable = function(size: number) {
    const table = [];

    for (let i = 1; i <= size; i++) {
        const row = [];
        for (let j = 1; j <= size; j++) {
            row.push(i*j)
        }
        table.push(row)
    }

    return table
}

console.log('multiplicationTable: ', multiplicationTable(3))


Home.getLayout = getBaseLayout;
export default Home;
