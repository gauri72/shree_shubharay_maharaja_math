import Link from "next/link"
export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
         
        <section className="page-header">
            <div className="page-header__shape-1 float-bob-y">
                {/* Namaste icon — folded-hands outline, style 1 */}
                <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M32 6c0 10-3 14-3 20 0 4 1.5 6 3 8 1.5-2 3-4 3-8 0-6-3-10-3-20Z" stroke="#F2A90A" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M32 34c-6 2-10 7-11 13-1 6 1 11 1 11" stroke="#F2A90A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M32 34c6 2 10 7 11 13 1 6-1 11-1 11" stroke="#F2A90A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 58c4-3 9-4 18-4s14 1 18 4" stroke="#F2A90A" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
            <div className="page-header__shape-2 float-bob-x">
                {/* Namaste icon — lotus-cradled hands, style 2 */}
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M32 10c-2 8-8 12-8 20 0 6 3.5 10 8 12 4.5-2 8-6 8-12 0-8-6-12-8-20Z" stroke="#F2A90A" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M8 42c6-4 13-2 16 2M56 42c-6-4-13-2-16 2" stroke="#F2A90A" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 50c7-3 13-3 20 0 7-3 13-3 20 0" stroke="#F2A90A" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="32" cy="24" r="2.5" fill="#F2A90A"/>
                </svg>
            </div>
            <div className="page-header__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/page-header-bg.jpg)' }} >
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>{breadcrumbTitle}</h2>
                    <div className="thm-breadcrumb__box">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><Link href="/">Home</Link></li>
                            <li><span className="fas fa-angle-right"></span></li>
                            <li>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      

        </>
    )
}
