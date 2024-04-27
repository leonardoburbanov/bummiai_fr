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
  const decodedReportId = decodeURIComponent(reportId);
  console.log(decodedReportId)
  return (
          <div>
            {/* <h1>Embedded Report</h1>
            <p>Report ID: {reportId}</p> */}
            {/* Add your embedded content here */}
            {decodedReportId=='ZekGR 2fIzkSJOVTjaRIlHCXRxk=' &&
            (<AIChatBoxEmbed open={true} onClose={() => true} />)}
            {decodedReportId!='ZekGR 2fIzkSJOVTjaRIlHCXRxk=' &&
            (<p>The report with Id: {decodedReportId} does not exist</p>)}
        </div>
  );
}
