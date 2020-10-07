/**
 * 조건문이 있을 때의 슬라이드
 */
let result;

if (availableResources.length === 0) {
  result = createResource();
  allocatedResources.push(result);
} else {
  result = availableResources.pop();
}

allocatedResources.push(result);
return result;
