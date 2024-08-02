import React, { useEffect, useState } from 'react';
import '../Styles/FacultyList.css';
import axios from 'axios';

const NonFacultyTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://nedmob1.neduet.edu.pk:8080/nonteachingFaculty')
            .then(response => {
                setData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <table className="faculty-table mb-5">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Qualification and Email</th>
                    <th>CV</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item._id}>
                        <td>
                            <div className="name-cell">
                                <p className="name">{item.name}</p>
                            </div>
                        </td>
                        <td>{item.designation}</td>
                        <td>
                            <div className="details">
                                <p>{item.description}</p>
                            </div>
                        </td>
                        <td> <a target='_blank' href={item.imageUrl}>View CV</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default NonFacultyTable;
