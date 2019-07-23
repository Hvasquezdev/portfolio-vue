<template functional>
  <div class="spinner">
    <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle class="length" fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
    </svg>
    <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
    </svg>
    <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
    </svg>
    <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
    </svg>
  </div>
</template>

<style lang="scss">
svg {
	display: block;
	margin: 0; padding: 0;
}

.spinner {
  margin: auto;
	width: 66px; height: 66px;
	animation: contanim 2s linear infinite;
}

$colors: #23d160, #209bee, #ffdd57, #363636;
$d: 175.6449737548828;

svg {
	width: 100%; height: 100%;
	
	left: 0; top: 0;
	position: absolute;
	
	transform: rotate(-90deg);
	
	@for $i from 1 through 4 {		
		&:nth-child(#{$i}) circle {
			stroke: nth($colors, $i);
			stroke-dasharray: 1, 300;
			stroke-dashoffset: 0;
			
			animation: strokeanim 3s calc(.2s * (#{$i})) ease infinite;
			transform-origin: center center;
		}
	}
}

@keyframes strokeanim {
	0% {
    stroke-dasharray: 1, 300;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 120, 300;
    stroke-dashoffset: -$d / 3;
  }
  100% {
    stroke-dasharray: 120, 300;
    stroke-dashoffset: -$d;
  }
}

@keyframes contanim {
	100% {
		transform: rotate(360deg)
	}
}
</style>
