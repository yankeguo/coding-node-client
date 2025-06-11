# DescribeCanMerge200ResponseResponse

公共返回体

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MergeStatus** | **string** | NOT_MERGEABLE(不允许合并),ALREADY_MERGED(完全一样的两个分支),MERGEABLE(可合并),FAILED(比较失败) | [optional] [default to undefined]
**RequestId** | **string** | 请求id | [optional] [default to 'xxxxx']

## Example

```typescript
import { DescribeCanMerge200ResponseResponse } from './api';

const instance: DescribeCanMerge200ResponseResponse = {
    MergeStatus,
    RequestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
