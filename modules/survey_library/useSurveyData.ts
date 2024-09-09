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
    const [rows, setRows] = useState<Survey[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setTimeout(() => {
            try {
                // Mock Fetch survey data from API.
                setRows(mapSurvey(mockSurveyData));
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }, 1000)
    }, [])

    return { rows, loading, error }
}