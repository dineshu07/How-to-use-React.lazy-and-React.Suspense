import React, { Component } from 'react';
import { PieChart, Pie, Legend, Cell, Label, LabelList } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
const data01 = [
    { name: 'Group A', value: 400, v: 89 },
    { name: 'Group B', value: 300, v: 100 },
    { name: 'Group C', value: 200, v: 200 },
    { name: 'Group D', value: 200, v: 20 },
    { name: 'Group E', value: 278, v: 40 },
    { name: 'Group F', value: 189, v: 60 },
];
const colors = scaleOrdinal(schemeCategory10).range();

function chart2() {
    
        return (
            <div>
                <PieChart width={800} height={400}>
                    <Legend />
                    <Pie
                        data={data01}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        startAngle={180}
                        endAngle={0}
                        outerRadius={80}
                        label
                    >
                        {
                            data01.map((entry, index) => (
                                <Cell key={`slice-${index}`} fill={colors[index % 10]} />
                            ))
                        }
                        <Label value="test" position="outside" />
                        <LabelList position="outside" />
                    </Pie>
                </PieChart>
            </div>
        );
}

export default chart2;