import DetailForm from "../../organisms/DetailForm";

interface BlogOverviewProps {
  websiteContent?: string;
}

export default function BlogOverview({
  websiteContent = "",
}: BlogOverviewProps) {
  return (
    <div className="blog_overview sec-pad-all">
      <div className="container">
        <div className="main_wrapper flex">
          <div className="colA">
            <div
              className="website-content"
              dangerouslySetInnerHTML={{ __html: websiteContent }}
            ></div>
          </div>
          <div className="colB">
            <DetailForm />
          </div>
        </div>
      </div>
    </div>
  );
}
