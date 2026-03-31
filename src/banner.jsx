export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
      <div>
        <h1 className="text-4xl font-bold">Supercharge Your Digital Workflow</h1>
        <p>Access premium AI tools, templates and productivity software.</p>
        <button className="btn btn-primary mr-2">Explore</button>
        <button className="btn btn-outline">Watch Demo</button>
      </div>
      <img src="https://i.ibb.co/6Jj8YJk/ai.png" />
    </div>
  );
}