import { FaGem, FaMicroscope } from 'react-icons/fa6';

export default function TrustBar() {
    return (
        <section className="border-b border-gray-200 bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center divide-x divide-gray-100">
                    <div className="px-4">
                        <p className="text-3xl font-bold text-navy-900 mb-1">10+</p>
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Years CTO Experience</p>
                    </div>
                    <div className="px-4">
                        <FaGem className="text-3xl text-orange-500 mb-2 mx-auto" />
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Alibaba Cloud Diamond MVP</p>
                    </div>
                    <div className="px-4">
                        <p className="text-3xl font-bold text-navy-900 mb-1">40+</p>
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Enterprise Projects Delivered</p>
                    </div>
                    <div className="px-4">
                        <FaMicroscope className="text-3xl text-teal-500 mb-2 mx-auto" />
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">PhD Research: ESG & AI</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
