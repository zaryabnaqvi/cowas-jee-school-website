import React from 'react';
import '../Styles/FacultyList.css';

const data = [
    {
      name: 'Prof. Dr. Mirza Mahmood Baig',
      designation: 'Chairman / Professor',
      ext: '2510, 2209',
      cv: 'CV',
      image: 'path_to_image1.jpg',
      details: [
        'Ph. D. (Computer Science)',
        'M.S Computer Science',
        'M.Sc. Mathematics',
        'Member KMA',
        'cdm@neduet.edu.pk',
        'baig@neduet.edu.pk',
      ],
    },
    {
      name: 'Mr. Javed Ahmed Siddiqui',
      designation: 'Assistant Professor',
      ext: '2638',
      cv: 'CV',
      image: 'path_to_image2.jpg',
      details: [
        'M.Sc. Applied Mathematics',
        'javedsiddiqui@neduet.edu.pk',
      ],
    },
    {
      name: 'Mrs. Razia Shaheen',
      designation: 'Assistant Professor',
      ext: '2641',
      cv: 'CV',
      image: '',
      details: [
        'M. Phil Mathematics',
        'M.Sc. Mathematics',
        'raziaasha@neduet.edu.pk',
      ],
    },
    {
      name: 'Dr. Muhammad Jamil',
      designation: 'Assistant Professor',
      ext: '2642',
      cv: 'CV',
      image: 'path_to_image4.jpg',
      details: [
        'Ph. D. (Applied Mathematics)',
        'M. Phil Mathematics',
        'M.Sc. Mathematics',
        'jqrza@neduet.edu.pk',
      ],
    },
  ];

const FacultyTable = () => {
    return (
        <table className="faculty-table">
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
            <tr key={index}>
              <td>
                <div className="name-cell">
                  <p className="name">{item.name}</p>
                 
                </div>
              </td>
              <td>{item.designation}</td>
              <td> 
                <div className="details">
                    {item.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                  </td>
              <td>
                <a  href={item.cv} target="_blank" rel="noopener noreferrer">
                  {item.cv}
                </a>
              </td>
          
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default FacultyTable;
