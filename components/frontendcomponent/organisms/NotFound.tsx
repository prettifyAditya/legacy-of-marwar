export default function NotFound({
  desc = "Product Not Found!",
}: {
  desc?: string;
}) {
  return (
    <div className="product-not-found">
      <div className="nt-fnd-wrp">
        <div className="icon">
          <img src="/icon/not-found.gif" className="ico" alt="not-found"></img>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}
