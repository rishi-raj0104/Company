const testimonials = [
    {
        name: "John Doe",
        title: "CEO, Tech Co.",
        testimonial: "Masala Comp has exceeded my expectations with their top-notch customer service and high-quality products. I highly recommend them to anyone looking for reliable IT solutions.",
    },
    {
        name: "Jane Smith",
        title: "CTO, Marketing Inc.",
        testimonial: "I've been a loyal customer of Masala Comp for years, and they never disappoint. Their team is always ready to assist and goes above and beyond to ensure our systems run smoothly.",
    },
    {
        name: "Michael Johnson",
        title: "IT Manager, Retail Co.",
        testimonial: "The team at Masala Comp is truly exceptional. They were able to solve a complex issue we were facing in no time. I'm impressed by their expertise and professionalism.",
    },
    {
        name: "Sarah Williams",
        title: "Operations Manager, E-commerce Co.",
        testimonial: "I can't thank Masala Comp enough for their outstanding support. They are always quick to respond and resolve any issues we encounter. It's a pleasure working with them.",
    },
];

const HomeCTA = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                <p className="text-lg text-center mb-12">Read what our customers have to say about their experience with Masala Comp.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
                            <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeCTA;
