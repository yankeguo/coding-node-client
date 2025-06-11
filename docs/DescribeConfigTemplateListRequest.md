# DescribeConfigTemplateListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CooperateMode** | **string** | 配置方案协作类型，包括 SCRUM 和 CLASSIC | [optional] [default to undefined]
**Keyword** | **string** | 关键字 | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 分页大小 | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**TemplateType** | **string** | 配置方案类型，全局配置方案取值 GLOBAL ，项目配置方案取值 PROJECT，不填默认为 GLOBAL | [optional] [default to undefined]

## Example

```typescript
import { DescribeConfigTemplateListRequest } from './api';

const instance: DescribeConfigTemplateListRequest = {
    CooperateMode,
    Keyword,
    PageNumber,
    PageSize,
    ProjectName,
    TemplateType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
