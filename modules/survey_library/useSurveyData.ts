import { useEffect, useState } from "react";
import { formatDate } from "../../utils/formateDate";
import { mockSurveyData } from "../../mockdata/mockSurveyData";
export interface Survey {
    survey_id: string;
    survey_instance_id: string;
    survey_revision: number;
    title: string;
    description: string;
    start_timestamp: string;
    end_timestamp: string;
    survey_url: string;
};

const mapSurvey = (data: Survey[]) => {
    return data.map((data) => {
        return {
            ...data,
            id: data.survey_id,
            status: 'success',
            startDateFormatted: formatDate(new Date(data.start_timestamp))
        }
    })
}

export function useSurveyData() {
    const [rows, setRows] = useState<Survey[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchSurveyData = async () => {
            setLoading(true);
            try {
                let response;
                if (process.env.NODE_ENV === 'development') {
                    response = mockSurveyData;
                } else {
                    const res = await fetch('https://classRanked.com/api/instance/');
                    response = await res.json();
                }

                setRows(mapSurvey(response));
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        setTimeout(() => {
            fetchSurveyData();
        }, 1000);
    }, []);

    return { rows, loading, error }
}