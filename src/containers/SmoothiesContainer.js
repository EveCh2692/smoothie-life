import { useState, useEffect } from 'react';
import { SmoothiesList } from '../components/smoothies/SmoothiesList';
import { SmoothiesFilter } from '../components/smoothies/SmoothiesFilter';

export const SmoothiesContainer = () => {
	const [smoothies, setSmoothies] = useState([]);
	const [filteredSmoothies, setFilteredSmoothies] = useState(smoothies);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(' http://localhost:3001/smoothies');
				const data = await response.json();
				setSmoothies(data);
				setFilteredSmoothies(data);
			} catch (error) {
				alert(error);
			}
		};
		fetchData();
	}, []);

	const handleSearch = (searchValue) => {
		const filteredSmoothies = smoothies.filter((smoothie) =>
			smoothie.name.toLowerCase().startsWith(searchValue.toLowerCase())
		);

		setFilteredSmoothies(filteredSmoothies);
	};

	const handleSort = (isChecked) => {
		setChecked(isChecked);
	};

    const sortedSmoothies = [...filteredSmoothies].sort((smoothie1, smoothie2) => {
			if (smoothie1.name < smoothie2.name) {
				return -1;
			}
			if (smoothie1.name > smoothie2.name) {
				return 1;
			}
			return 0;
		});


	return (
		<div>
			<SmoothiesFilter handleSort={handleSort} handleSearch={handleSearch} />
			<SmoothiesList
				smoothies={checked ? sortedSmoothies : filteredSmoothies}
			/>
		</div>
	);
};