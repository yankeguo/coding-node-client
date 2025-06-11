# DescribeServiceHookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | service-hook-id | [default to undefined]
**ProjectId** | **number** | 项目或者研发空间id | [default to undefined]
**TargetType** | **string** | 目标数据类型：PROJECT,SPACE_NODE,PROGRAM,默认PROJECT | [optional] [default to undefined]

## Example

```typescript
import { DescribeServiceHookRequest } from './api';

const instance: DescribeServiceHookRequest = {
    Id,
    ProjectId,
    TargetType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
