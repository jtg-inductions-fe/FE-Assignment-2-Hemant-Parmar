import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { Box, useTheme, Container } from '@mui/material';

import { salesData } from '@data';
import { CustomTooltip } from '@components';
import { formatDateVariants } from '@utils';

export const Graph = () => {
    const theme = useTheme();

    const chartData = salesData.map((d) => {
        const { short, full } = formatDateVariants(d.date);
        return {
            dateShort: short, // for X axis
            dateFull: full, // for tooltip
            sales: d.sales,
        };
    });

    return (
        <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
            <Box
                width={'100%'}
                height={500}
                bgcolor={theme.palette.background.paper}
                borderRadius={3}
                p={8}
            >
                <ResponsiveContainer>
                    <LineChart
                        data={chartData}
                        margin={{ top: 50, right: 20, left: 20, bottom: 50 }}
                    >
                        <text
                            fill="black"
                            textAnchor="start"
                            dominantBaseline="text-before-edge"
                        >
                            <tspan fontSize="20">Sales</tspan>
                        </text>
                        <CartesianGrid
                            strokeDasharray="0"
                            vertical={false}
                            color={theme.palette.action.hover}
                            strokeWidth={1}
                        />
                        <XAxis
                            dataKey="dateShort"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={36}
                            color={theme.palette.text.secondary}
                            fontSize={theme.typography.body2.fontSize}
                        />
                        <YAxis
                            domain={[0, 240000]}
                            tickFormatter={(value) => `${value / 1000}K`}
                            tickCount={7}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={28}
                            color={theme.palette.text.secondary}
                            fontSize={theme.typography.body2.fontSize}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            type="monotone"
                            dataKey="sales"
                            stroke={theme.palette.primary.main}
                            strokeWidth={3}
                            dot={{ r: 0 }}
                            activeDot={{ r: 5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Container>
    );
};
