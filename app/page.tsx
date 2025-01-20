import Editor from "./_components/Editor";
import Review from "./_components/Review";
export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      {/* RAM RAM */}
      <Editor />
      <Review />
    </div>
  );
}
