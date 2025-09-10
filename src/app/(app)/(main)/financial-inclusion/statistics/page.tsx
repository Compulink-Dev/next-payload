// pages/financial-inclusion.js
import { Button } from "@/components/ui/button";
import { ArrowLeft, Landmark } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function FinancialInclusion() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Financial Inclusion - Reserve Bank of Zimbabwe</title>
        <meta
          name="description"
          content="Financial Inclusion initiatives and strategies in Zimbabwe"
        />
      </Head>

      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-white hover:bg-white/10"
            >
              <Link href="/regulation" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Finacnial Inclusion
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Landmark className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-lg md:text-3xl font-bold">
                Fanancial Inclusion
              </h1>
              <p className="text-blue-200 text-xs md:text-sm">
                Regulating foreign exchange and capital movements
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li className="text-gray-500">Financial Inclusion</li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">
            Financial Inclusion
          </h1>

          <ul className="list-square pl-6 mb-6 space-y-3">
            <li className="text-gray-700">
              Globally, policy makers are increasingly{" "}
              <strong className="text-blue-800">
                embracing financial inclusion initiatives
              </strong>{" "}
              to foster inclusive economic growth and social development.
            </li>
            <li className="text-gray-700">
              <strong className="text-blue-800">Financial Inclusion</strong>{" "}
              means that individuals and businesses have access to useful and
              affordable financial products and services that meet their needs –
              transactions, payments, savings, credit and insurance – delivered
              in a responsible and sustainable way.
            </li>
            <li className="text-gray-700">
              Financial Inclusion is a key enabler to the achievement of the
              Sustainable Development Goals (SDGs) which are a universal call to
              action to end poverty, protect the planet and ensure that all
              people enjoy peace and prosperity by 2030.
            </li>
            <li className="text-gray-700">
              The Reserve Bank of Zimbabwe has therefore adopted a{" "}
              <strong className="text-blue-800">developmental approach</strong>{" "}
              to drive financial inclusion in Zimbabwe.
            </li>
            <li className="text-gray-700">
              The following are some of the benefits of financial inclusion.
            </li>
          </ul>

          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li className="text-gray-700">
              freedom from clutches of informal lenders/loan sharks;
            </li>
            <li className="text-gray-700">enhances financial deepening;</li>
            <li className="text-gray-700">
              promotes inclusive and equitable economic growth;
            </li>
            <li className="text-gray-700">boost employment opportunities;</li>
            <li className="text-gray-700">
              promotes formalisation of the economy;
            </li>
            <li className="text-gray-700">
              promote growth of formal sources of credit;
            </li>
            <li className="text-gray-700">poverty reduction; and</li>
            <li className="text-gray-700">enhances financial stability.</li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">
            Financial Inclusion Strategy
          </h1>

          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>
                Zimbabwe National Financial Inclusion Strategy II Pamphlet
                October 2022 [
                <a
                  href="/documents/BLSS/2022/NFIS_TWO_PAMPHLET.pdf"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  .pdf 1.73 MB
                </a>
                ]
              </span>
            </li>

            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>
                Zimbabwe National Financial Inclusion Strategy II (2022 - 2026)
                [
                <a
                  href="/documents/BLSS/FinancialInclusion/Zimbabwe_National_Financial_Inclusion_Strategy_II_2022-2026.pdf"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  .pdf 1.97 MB
                </a>
                ]
              </span>
            </li>

            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>
                Zimbabwe National Financial Inclusion Strategy (2016 - 2020) [
                <a
                  href="/documents/BLSS/FinancialInclusion/National-Financial-Inclusion-Strategy.pdf"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  .pdf 2.33 MB
                </a>
                ]
              </span>
            </li>

            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>
                National Financial Inclusion Strategy II Launch Presentation by
                Dr JT Chipika, 31 October 2022 [
                <a
                  href="/documents/BLSS/FinancialInclusion/NFIS_II_LAUNCH_PRESENTATION_311022_-_DG_CHIPIKA.pdf"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  .pdf 3.39 MB
                </a>
                ]
              </span>
            </li>

            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>
                <strong>
                  Zimbabwe National Financial Inclusion Journey 2016-2020.
                </strong>
                {`As we approach the end of the first phase of the National
                Financial Inclusion Strategy (2016-2020), it is imperative to
                take stock of the progress towards attainment of the strategy's
                objectives and targets in order to effectively map the second
                phase of the strategy - 2021 to 2025.`}
                <strong>
                  <a
                    href="/documents/BLSS/2021/FINANCIAL-INCLUSION--JOURNEY.pdf"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Read more...
                  </a>
                </strong>
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">
            Financial Inclusion Reports
          </h1>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>Global Money Week Report 11 - 22 March 2024</span>
              <a
                href="/documents/bank_sup/Final_GMW_REPORT_2024.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [pdf|1.6MB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>
                Global Money Week 2024 - CEO Round Table Keynote Address
              </span>
              <a
                href="/documents/bank_sup/Keynote_Address-_GMW_2024_-CEO_Round_Table.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [pdf|1.6MB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>2023 Annual Financial Literacy Report</span>
              <a
                href="/documents/bank_sup/ANNUAL_FINANCIAL_LITERACY_REPORT_2023_final.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [pdf|4.6MB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>
                2023 Annual Financial Inclusion Conference presentation by
                Deputy Governor Dr J.T Chipika, 4 December 2023
              </span>
              <a
                href="/documents/BLSS/2023/Annual_Financial_Inclusion_Conference_-_PP-4_DECEMBER_2023_FINAL.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [pdf|2MB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>
                {` Governor's Keynote Address at the 2023 Annual Financial
                Inclusion Conference, 4 December 2023`}
              </span>
              <a
                href="/documents/BLSS/2023/Governors_Key_Note_Address_-_Annual_Financial_Inclusion_Conference_Dec_2023.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [pdf|137 KB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>Consolidated Global Money Week Report 2023</span>
              <a
                href="/documents/BLSS/FinancialInclusion/CONSOLIDATED_GMW_CELEBRATIONS_May_2023.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [.pdf|7 MB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>
                Zimbabwe FinScope Consumer Survey Report December 2022
              </span>
              <a
                href="/documents/BLSS/2022/Zimbabwe_FinScope_Consumer_2022_Survey_Report.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [.pdf 2.23 MB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>Zimbabwe FinScope MSME Survey Report December 2022</span>
              <a
                href="/documents/BLSS/2022/Zimbabwe_FinScope_MSME_Survey_Report_2022.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [pdf|7MB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>
                The Financial Inclusion Bulletin Volume 2, Issue 1 (January -
                December 2022)
              </span>
              <a
                href="/documents/BLSS/FinancialInclusion/FINANCIAL_INCLUSION_BULLETIN_2022_final_7.09.23.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [.pdf|7 MB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>
                Commemorating Global Money Week 2022 (21 - 27 March 2022)
              </span>
              <a
                href="/documents/BLSS/2022/Global-Money-Week-2022.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [.pdf|1.5 MB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>2021 Financial Inclusion Bulletin</span>
              <a
                href="/documents/bank_sup/Financial-Inclusion-Bulletin.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [.pdf| 35 MB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>
                Zimbabwe National Financial Inclusion Journey 2016-2020
              </span>
              <a
                href="/documents/BLSS/2021/FINANCIAL-INCLUSION--JOURNEY.pdf"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [pdf|7MB]
              </a>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>
                Commemorating Global Money Week 2021 (22 - 28 March 2021)
              </span>
              <div className="flex space-x-2">
                <a
                  href="/documents/BLSS/2021/GMW-Booklet-.pdf"
                  target="_blank"
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
                >
                  [.pdf|4 MB]
                </a>
                <a
                  href="https://bit.ly/2RAp4Sx"
                  target="_blank"
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
                >
                  [Video|.M4V]
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center py-2">
              <span>
                2021 Consolidated Global Money Week Celebrations Report
              </span>
              <a
                href="/documents/BLSS/2021/CONSOLIDATED-GLOBAL-MONEY-WEEK-CELEBRATIONS-2021-REPORT-pdf.pdf"
                target="_blank"
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
              >
                [.pdf| 1.34 MB]
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">
            Standards, Guidelines and Circulars
          </h1>

          <ul className="list-square pl-6 space-y-3">
            <li>
              <a
                href="/documents/bank_sup/financial-inclusion-women.pdf"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Women Financial Inclusion 2019
              </a>
            </li>
            <li>
              <a
                href="/documents/BLSS/FinancialInclusion/prudential_standard01-2018BSD-GuidanceOnRecoveryPlanning.pdf"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Prudential Standard No.1-2018/BSD : Guidance on Recovery
                Planning
              </a>
            </li>
            <li>
              <a
                href="/documents/BLSS/FinancialInclusion/operational-guidelines-for-deposit-taking-microfinance-institutions.pdf"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Prudential Standards No. 02-2016/BSD: Deposit-Taking
                Microfinance Institutions
              </a>
            </li>
            <li>
              <a
                href="/documents/BLSS/FinancialInclusion/agency-banking-prudential-standards-no.-01-2016.pdf"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Agency Banking Prudential Standards No.-01-2016/BSD
              </a>
            </li>
            <li>
              <a
                href="/documents/BLSS/FinancialInclusion/national-microfinance-policy.pdf"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                National Microfinance Policy
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
