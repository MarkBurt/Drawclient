import { socials } from "../data/socials";

export default function NotFound() {
  return (
    <div className="p-3 space-y-2">
      <p>hey there!</p>

      <p>looking for something you couldn&apos;t find?</p>
      <br />
      <p className="opacity-70">
       * 要建立关系，请握住一个区域的蓝色圆点，并将其向您想要连接的区域拖动。
      </p>
      <a
        className="text-blue-600"
        href={`${socials.docs}/create-diagram#relationships`}
      >
        see here
      </a>
    </div>
  );
}
