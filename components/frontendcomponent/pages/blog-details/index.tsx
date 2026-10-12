import BlogDetailBanner from "./BlogDetailBanner";
import "@/uploads/sass/blogs/blogs.css";
import BlogOverview from "./BlogOverview";
import MoreBlogs from "./MoreBlogs";

export default function BlogDetailsPage() {
  return (
    <main>
      <BlogDetailBanner />
      <BlogOverview
        websiteContent={`<p>
            Lorem ipsum dolor sit amet consectetur. Maecenas vel fringilla felis
            faucibus arcu in ultrices quam aliquam. Sed faucibus libero at
            tincidunt amet sed rhoncus. Pulvinar vitae viverra interdum orci
            mauris facilisis libero aenean amet. Viverra eu feugiat eu placerat
            dui auctor. Est gravida sit euismod aenean. At sit risus auctor
            nisi. Mi ornare faucibus at enim sed egestas. Mauris pretium enim
            proin nam fames. Est risus ut amet a tincidunt tincidunt ut
            ultricies. Velit arcu at at nullam leo sodales egestas aenean sed.
            Placerat sit elit aliquam lectus quis odio mattis enim. Laoreet
            habitant felis praesent in augue sagittis. Non in ut at elementum
            viverra quam duis non metus.Et egestas facilisis libero orci sed
            mauris massa erat. Egestas fusce bibendum dolor condimentum neque.
            Feugiat commodo ut erat ipsum faucibus lacus libero. Ullamcorper a
            odio mi volutpat id ut urna. Nulla facilisi tristique lorem tellus
            lectus a. Condimentum tempus leo eu at vitae purus est cras eget.
            Vel varius orci tempus aliquam.
          </p>
          <p>Mollis nulla cursus amet aliquet. Vitae etiam amet lacus pulvinar imperdiet turpis turpis maecenas quisque. Quis sagittis quis ut cursus suspendisse. Mi ut in elementum ipsum pellentesque tincidunt auctor. In dolor non nibh sit ac. Ac morbi cras aliquam tellus libero enim turpis nulla vel. Dui scelerisque pellentesque sit fermentum. Vestibulum urna in neque hac eget nisl nisl sed pretium. Suspendisse cursus ac vel id porttitor quam. Tristique enim vivamus commodo scelerisque sit amet purus. At suspendisse euismod lectus hac justo tortor eget purus semper. Mauris id scelerisque sollicitudin interdum. Elit id pharetra malesuada cursus varius etiam diam. Turpis urna leo lacinia risus amet sit adipiscing sollicitudin.</p>`}
      />
      <MoreBlogs />
    </main>
  );
}
