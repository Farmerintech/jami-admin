import type {Metadata} from "next";


export const metadata:Metadata= {
  title: "Cityplus | Admin Dashboard Overview",
};

export default function PageMetadata ({children}:any){
    return <>{children}</>
}