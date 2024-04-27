"use client"
import AIChatBoxEmbed from "@/components/AIChatBoxEmbed";
import { useParams } from "next/navigation";


interface EmdedParams {
  reportId: string;

  // Add the index signature for string keys
  [key: string]: string;
}

export default function ChatbotsPage() {
  const {reportId} = useParams<EmdedParams>();
  console.log(reportId)
  return (
          <div>
            {/* <h1>Embedded Report</h1>
            <p>Report ID: {reportId}</p> */}
            {/* Add your embedded content here */}
            {reportId=='ZekGR%202fIzkSJOVTjaRIlHCXRxk%3D' &&
            (<AIChatBoxEmbed open={true} onClose={() => true} />)}
            {reportId!='ZekGR%202fIzkSJOVTjaRIlHCXRxk%3D' &&
            (<p>The report with Id: {reportId} does not exist</p>)}
        </div>
  );
}
