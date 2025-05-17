const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 mb-6">Feel free to reach out to me:</p>
        <div className="space-y-2">
          <p>Email: <a href="mailto:your@email.com" className="text-blue-600">your@email.com</a></p>
          <p>Telegram: <a href="https://t.me/yourhandle" className="text-blue-600">@yourhandle</a></p>
          <p>GitHub: <a href="https://github.com/yourusername" className="text-blue-600">github.com/yourusername</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;