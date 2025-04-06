import PageHeader from "./components/pageHeader";
import CategoryLisenin from "./components/categoryListening";
import ArticleListening from "./components/articleListening";
import Pagination from "./components/pagination";
import Footer from "./components/footer";
import Banner from "./components/banner";
function App() {
  return (
    <div className="  bg-slate-700  mx-auto  font-roboto  size-full ">
      <PageHeader />
      <Banner />
      <CategoryLisenin />
      <ArticleListening />
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
