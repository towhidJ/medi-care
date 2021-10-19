import React from "react";

const Blog = () => {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            <div className="flex justify-center items-center mt-5">
                <div className="max-w-lg mx-auto">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <img
                            className="rounded-t-lg"
                            src="https://image.freepik.com/free-photo/serious-operation-darkness_329181-20991.jpg"
                            alt=""
                        />

                        <div className="p-5">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                COVID-19: What do we know about the C.1.2
                                variant?
                            </h5>

                            <p className="font-normal text-gray-700 mb-3">
                                All data and statistics are based on publicly
                                available data at the time of publication. Some
                                information may be out of date.....
                            </p>
                            <a
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                                href="#"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-5">
                <div className="max-w-lg mx-auto">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <img
                            className="rounded-t-lg"
                            src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg"
                            alt=""
                        />

                        <div className="p-5">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                DNA vs. mRNA vaccines: Similarities and
                                differences
                            </h5>

                            <p className="font-normal text-gray-700 mb-3">
                                DNA and RNA vaccines use genetic material to
                                deliver information to human cells and elicit an
                                immune response. DNA vaccines are safe, easy,
                                affordable to produce, and, unlike RNA vaccines,
                                are stable at room temperature. These attributes
                                make them more promising for rapidly immunizing
                                populations, especially in resource-limited
                                settings.
                            </p>
                            <a
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                                href="#"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-5">
                <div className="max-w-lg mx-auto">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <img
                            className="rounded-t-lg"
                            src="https://image.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg"
                            alt=""
                        />

                        <div className="p-5">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                Linking sleep disturbance with depression,
                                anxiety, bipolar disorder, schizophrenia
                            </h5>

                            <p className="font-normal text-gray-700 mb-3">
                                A diverse, multidisciplinary team of scientists
                                worked on a creative research design to uncover
                                sleep patterns in people living with mental
                                health conditions or a genetic predisposition to
                                them. Their results appear in the journal
                            </p>
                            <a
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                                href="#"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
