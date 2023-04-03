import React from 'react';
import { View ,Text , StyleSheet , Image} from 'react-native';


const MyBiodata ={identity:{npm:212310018 ,firstname: "Fathurahman",middlename:"AL",lastname:"Faridzi",},

    educations:[{ id: 1, school: 'SDN Bangka 3' },
                { id: 2, school: 'SMPN 3 Bogor' },
                { id: 3, school: 'SMK Wikrama Kota Bogor' }],

        mobile_phone: '082114824060',
        email: '212310018@student.ibik.ac.id',
        gender: 'M',
        tall_body: 175,
        weight_body: 64.5

}

const Latihan4RFC = () => {
    return( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View style={{ borderWidth: 2, padding: 10, width: 300 }}>
            <Text style={{ fontSize: 30, fontStyle: 'italic', fontWeight: '800' }}>MyBiodata </Text>
            <Text style={{ fontWeight: '700' }}>Identity</Text>
            <Text>NPM : {MyBiodata.state.identity.npm}</Text>
            <Text>First Name : {MyBiodata.state.identity.firstname}</Text>
            <Text>Middle Name : {MyBiodata.state.identity.middlename}</Text>
            <Text>Last Name : {MyBiodata.state.identity.lastname}</Text>
            <Text style={{ fontWeight: '700' }}>Educations</Text>
            
            {MyBiodata.state.educations.map((education) => {
                return (
                    <Text>{education.id}. {education.school}</Text>
                )
            })}

            <Text>Mobile Phone : {MyBiodata.state.mobile_phone}</Text>
            <Text>Email : {MyBiodata.state.email}</Text>
            <Text>Gender : {MyBiodata.state.gender}</Text>
            <Text>Tall Body : {MyBiodata.state.tall_body}</Text>
            <Text>Weight Body : {MyBiodata.state.weight_body}</Text>

            </View>
    </View>
    );
}
 

export default Latihan4RFC;
