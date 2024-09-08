import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
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

const mockData: Survey[] = [
    {
        survey_id: "262c7ecb-982d-11ed-bba1-022b4079eda1",
        survey_instance_id: "30985c7f-98ed-11ed-bba1-022b4079eda1",
        survey_revision: 1,
        title: "Data Systems 101",
        description: "Spring 2023",
        start_timestamp: "2023-04-01 00:00:00",
        end_timestamp: "2023-05-01 00:00:00",
        survey_url: "https://foo.net",
    },
    {
        survey_id: "262dece9-982d-11ed-bba1-022b4079eda1",
        survey_instance_id: "566cde6b-98ed-11ed-bba1-022b4079eda1",
        survey_revision: 1,
        title: "Data Systems 102",
        description: "Spring 2023",
        start_timestamp: "2023-04-01 00:00:00",
        end_timestamp: "2023-05-01 00:00:00",
        survey_url: "https://bar.net",
    }
];

const mapSurvey = (data: Survey[]) => {
    return data.map((data, index) => {
        return {
            ...data,
            id: data.survey_id,
            status: 'success'
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
                setRows(mapSurvey(mockData));
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }, 1000)
    }, [])

    return { rows, loading, error }
}