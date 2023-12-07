import { SVG } from "@/types/svg";

const Editor = ({ width, height }: SVG) => {
	return (
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<g>
				<path
					fill="#A7E2DE"
					d="M267.116,131.293v35.842h56.896c16.523,0,24.696,9.655,23.079,22.284l-11.059,86.318
		c-0.793,6.191-5.446,11.346-12.093,11.346h-99.471h-49.762V167.136h49.762v-57.165h21.326
		C257.521,109.971,267.116,119.565,267.116,131.293L267.116,131.293z M256,16.516L91.208,59.168
		c0,47.732-34.815,87.318-80.439,94.771C48.234,272.074,148.248,409.768,256,495.484
		c107.748-85.717,207.766-223.409,245.228-341.546c-45.623-7.453-80.44-47.039-80.44-94.771L256,16.516z"
				/>
				<path
					fill="#FFCD85"
					d="M324.012,167.136h-56.896v-35.842c0-11.73-9.594-21.324-21.324-21.324h-21.326v57.165v119.949
		h99.471c6.647,0,11.3-5.156,12.093-11.346l11.059-86.318C348.706,176.791,340.535,167.136,324.012,167.136z"
				/>
				<rect
					x="174.7"
					y="167.14"
					fill="#565164"
					width={width}
					height={height}
				/>
			</g>
			<g>
				<path
					fill="#000003"
					d="M510.406,148.3c-1.637-2.666-4.353-4.487-7.44-4.992c-41.375-6.758-71.406-42.146-71.406-84.142
		c0-4.909-3.319-9.197-8.071-10.426L258.699,6.089c-1.772-0.458-3.626-0.458-5.398,0L88.51,48.741
		c-4.752,1.23-8.071,5.517-8.071,10.426c0,41.996-30.03,77.384-71.405,84.142c-3.087,0.505-5.803,2.326-7.44,4.992
		c-1.637,2.667-2.036,5.912-1.09,8.894c37.75,119.035,137.733,258.37,248.792,346.718c1.962,1.561,4.333,2.341,6.705,2.341
		c2.372,0,4.742-0.781,6.705-2.341c111.063-88.354,211.043-227.689,248.79-346.719C512.441,154.212,512.044,150.966,510.406,148.3z
		 M256,481.647C154.162,398.371,62.992,272.161,24.733,161.817c19.909-5.736,37.892-17.237,51.539-33.147
		c14.744-17.188,23.595-38.612,25.374-61.079L256,27.64l154.351,39.95c1.778,22.465,10.63,43.891,25.375,61.079
		c13.648,15.909,31.629,27.411,51.539,33.147C449.009,272.157,357.842,398.367,256,481.647z"
				/>
				<path
					fill="#000003"
					d="M174.134,92.53c0.91,0,1.834-0.115,2.755-0.359l0.305-0.08c5.751-1.517,9.184-7.41,7.666-13.162
		c-1.516-5.752-7.417-9.184-13.161-7.666l-0.305,0.08c-5.751,1.517-9.184,7.41-7.666,13.162
		C165.001,89.336,169.362,92.53,174.134,92.53z"
				/>
				<path
					fill="#000003"
					d="M263.03,418.636l-0.248,0.234l7.338,7.884l-7.34-7.882c-4.353,4.054-4.596,10.869-0.541,15.221
		c2.122,2.278,4.998,3.43,7.883,3.43c2.628,0,5.263-0.957,7.339-2.891l0.25-0.236c4.353-4.054,4.596-10.869,0.541-15.221
		C274.196,414.822,267.383,414.581,263.03,418.636z"
				/>
				<path
					fill="#000003"
					d="M143.384,78.59l-16.476,4.267c-3.806,0.985-6.773,3.968-7.74,7.778
		c-7.589,29.918-23.427,52.404-51.355,72.908c-4.795,3.521-5.828,10.261-2.308,15.055c2.11,2.875,5.377,4.397,8.689,4.396
		c2.213,0,4.446-0.68,6.365-2.088c30.306-22.25,48.336-46.745,57.784-78.761l10.438-2.703c5.759-1.492,9.218-7.369,7.726-13.127
		C155.019,80.557,149.134,77.098,143.384,78.59z"
				/>
				<path
					fill="#000003"
					d="M354.652,333.206c-4.662-3.698-11.433-2.915-15.132,1.745
		c-17.404,21.942-35.899,42.974-54.968,62.511c-4.154,4.257-4.072,11.075,0.185,15.23c2.094,2.044,4.809,3.063,7.521,3.063
		c2.8,0,5.598-1.086,7.708-3.248c19.583-20.061,38.569-41.652,56.431-64.17C360.092,343.678,359.311,336.903,354.652,333.206z"
				/>
				<path
					fill="#000003"
					d="M346.714,277.107l11.06-86.32c1.158-9.043-1.231-17.461-6.724-23.703
		c-4.304-4.89-12.489-10.719-27.037-10.719h-46.126v-25.072c0-17.696-14.397-32.094-32.094-32.094h-21.326
		c-5.948,0-10.77,4.822-10.77,10.77v46.395h-38.992c-5.948,0-10.77,4.822-10.77,10.77v119.947c0,5.948,4.822,10.77,10.77,10.77
		h49.72c0.015,0,0.028,0.002,0.042,0.002h99.471C335.595,297.855,345.174,289.129,346.714,277.107z M185.475,177.906h28.222v98.407
		h-28.222V177.906z M235.237,167.136v-46.395h10.556c5.819,0,10.554,4.735,10.554,10.554v35.842c0,5.948,4.822,10.77,10.77,10.77
		h56.896c5.073,0,8.933,1.212,10.869,3.411c1.384,1.572,1.898,3.838,1.527,6.735l-11.06,86.319c-0.025,0.199-0.282,1.945-1.41,1.945
		h-88.701V167.136H235.237z"
				/>
			</g>
		</svg>
	);
};

export default Editor;
