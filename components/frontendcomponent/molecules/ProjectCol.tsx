import Image from "next/image";
import Link from "next/link";
import "@/uploads/sass/component/component.css";

interface ProjectColData {
  linkHref: string;
  img?: string;
  name: string;
  location: string;
  status: string;
  price: string;
}

interface ProjectColProps {
  data: ProjectColData;
}

export default function ProjectCol({ data }: ProjectColProps) {
  const { linkHref, img, name, location, status, price } = data;

  return (
    <Link className="project_col" href={linkHref}>
      <figure>
        <Image
          src={img ?? "/images/other/project-placeholder.jpg"}
          width={380}
          height={245}
          alt={name}
        />
      </figure>
      <figcaption>
        <h5>{name}</h5>
        <p className="location">{location}</p>
        <ul>
          <li>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"></path>
                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"></path>
                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"></path>
                </g>
              </svg>
            </div>
            <div className="info">
              <h6>Status</h6>
              <p>{status}</p>
            </div>
          </li>
          <li>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.552 20L7.5 13.692v-1.307h3q1.517 0 2.759-.959t1.268-2.734H6.5v-1h7.92q-.31-1.182-1.388-1.937T10.5 5h-4V4h11v1h-3.942q.715.425 1.24 1.146t.656 1.546H17.5v1h-1.967q-.008 2.125-1.52 3.409q-1.511 1.284-3.513 1.284H8.602L14.942 20z"
                ></path>
              </svg>
            </div>
            <div className="info">
              <h6>Project Cost</h6>
              <p>{price}</p>
            </div>
          </li>
        </ul>
      </figcaption>
    </Link>
  );
}
